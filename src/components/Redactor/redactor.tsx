// RedactorJS.jsx
import React, { useEffect, useRef } from 'react';
import './redactor.min.css';
import Redactor from './redactor.usm.min.js';
import './plugins/ai/ai.min.js'
import './plugins/counter/counter.min.js'
import './plugins/alignment/alignment.min.js'
import { REDACTOR_NOTE } from '../../config/constant';

interface RedactorJSProps {
    type?: Number;
}

const RedactorJS: React.FC<RedactorJSProps> = ({ type = 0 }) => {
    const textAreaRef = useRef(null);

    useEffect(() => {
        let editor: any;
        let option = {
        }
        if (type == REDACTOR_NOTE) {
            option = {
                topbar: true,
                context: true,
                control: true,
                plugins: ['ai', 'alignment', 'counter'],
                popups: {
                    addbar: ['ai-tools', 'text', 'heading', 'image', 'todo', 'list', 'embed', 'table', 'quote', 'line', 'layout', 'wrapper']
                },
                buttons: {
                    editor: ['add', 'html', 'format', 'bold', 'italic', 'underline', 'link', 'image'],
                    topbar: ['shortcut'],
                    toolbar: ['ai-tools', 'add', 'bold', 'italic', 'underline', 'highlight', 'link', 'image', 'format'],
                },
                minHeight: '300px',
                ai: {
                    text: {
                        url: '/redactor/ai',
                        endpoint: 'https://api.openai.com/v1/chat/completions',
                        model: 'gpt-3.5 turbo',
                        stream: false
                    }
                },
                theme: "light",
                image: {
                    upload: '/assets/img/redactor_upload'
                }
            }
        }
        if (textAreaRef.current) {
            editor = Redactor(textAreaRef.current, option);
        }

        return () => {
            if (editor) {
                editor.destroy();
            }
        };
    }, [type]);

    return <textarea ref={textAreaRef}></textarea>;
};

export default RedactorJS;