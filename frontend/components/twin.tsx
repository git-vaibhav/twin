'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

const starterQuestions = [
    'What is the most complex agent system you have built?',
    'How do you evaluate LLM outputs?',
    'Why move from quality engineering into AI?',
    'What kind of role are you looking for?',
];

function Monogram({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
    return (
        <div
            aria-hidden="true"
            className={`flex-shrink-0 rounded-full bg-accent text-on-accent font-display flex items-center justify-center ${
                size === 'lg' ? 'w-11 h-11 text-lg' : 'w-7 h-7 text-xs'
            }`}
        >
            VS
        </div>
    );
}

// Replies can contain **bold** markdown
function renderContent(content: string) {
    return content.split(/\*\*(.+?)\*\*/g).map((part, index) =>
        index % 2 === 1 ? <strong key={index} className="font-semibold">{part}</strong> : part
    );
}

export default function Twin() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string>('');
    const messagesRef = useRef<HTMLDivElement>(null);

    // Scroll the message list only, so the page doesn't jump to the chat on load
    useEffect(() => {
        const list = messagesRef.current;
        list?.scrollTo({ top: list.scrollHeight, behavior: 'smooth' });
    }, [messages, isLoading]);

    const sendMessage = async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: text,
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: text,
                    session_id: sessionId || undefined,
                }),
            });

            if (!response.ok) throw new Error('Failed to send message');

            const data = await response.json();

            if (!sessionId) {
                setSessionId(data.session_id);
            }

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.response,
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error:', error);
            // Add error message
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.',
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-surface border border-line rounded-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-line">
                <Monogram size="lg" />
                <div className="min-w-0">
                    <h2 className="font-semibold leading-tight">Talk to my digital twin</h2>
                    <p className="text-sm text-muted mt-0.5">An AI briefed on my career, not me in person</p>
                </div>
            </div>

            {/* Messages */}
            <div ref={messagesRef} className="flex-1 overflow-y-auto p-4 space-y-4" aria-live="polite">
                {messages.length === 0 && (
                    <div className="min-h-full flex flex-col justify-end">
                        <p className="font-display text-3xl leading-tight">
                            Ask what you&apos;d ask me in an interview.
                        </p>
                        <p className="text-sm text-muted mt-2 mb-5">Or start with one of these:</p>
                        <div className="space-y-2">
                            {starterQuestions.map((question) => (
                                <button
                                    key={question}
                                    type="button"
                                    onClick={() => sendMessage(question)}
                                    className="w-full text-left text-sm border border-line rounded-lg px-3.5 py-2.5 hover:border-accent hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex gap-2.5 ${
                            message.role === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        {message.role === 'assistant' && <Monogram />}

                        <p
                            className={`max-w-[85%] whitespace-pre-wrap break-words text-[15px] leading-relaxed ${
                                message.role === 'user'
                                    ? 'bg-accent text-on-accent rounded-2xl rounded-br-sm px-3.5 py-2'
                                    : 'pt-0.5'
                            }`}
                        >
                            {renderContent(message.content)}
                        </p>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex gap-2.5 justify-start" role="status" aria-label="Twin is typing">
                        <Monogram />
                        <div className="flex items-center space-x-1.5 h-7">
                            <div className="typing-dot w-1.5 h-1.5 bg-muted rounded-full" />
                            <div className="typing-dot w-1.5 h-1.5 bg-muted rounded-full" />
                            <div className="typing-dot w-1.5 h-1.5 bg-muted rounded-full" />
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <form
                className="p-3 border-t border-line"
                onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(input);
                }}
            >
                <div className="flex items-center gap-2 border border-line rounded-lg pl-3.5 pr-1.5 py-1.5 focus-within:border-accent transition-colors">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about my work..."
                        aria-label="Your message"
                        className="flex-1 min-w-0 bg-transparent text-[15px] placeholder:text-muted focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        aria-label="Send message"
                        className="flex-shrink-0 w-8 h-8 bg-accent text-on-accent rounded-md flex items-center justify-center hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </form>
        </div>
    );
}
