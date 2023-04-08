import { marked } from 'marked';

// Override function
const tokenizer = {
    codespan(src) {
        const match = src.match(/^\$+([^\$\n]+?)\$+/);
        if (match) {
            return {
                type: 'codespan',
                raw: match[0],
                text: match[1].trim()
            };
        }

        // return false to use original codespan tokenizer
        return false;
    }
};

marked.use({ tokenizer });

export { marked};
