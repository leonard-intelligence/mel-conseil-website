import { describe, it, expect } from 'vitest';
import { z } from 'zod';

// Mirror the schema from Contact.tsx
const contactSchema = z.object({
    fullName: z.string().min(2, 'Le nom doit contenir au moins 2 caracteres'),
    email: z.string().email('Veuillez entrer un email valide'),
    company: z.string().optional(),
    message: z
        .string()
        .min(10, 'Le message doit contenir au moins 10 caracteres')
        .max(2000, 'Le message est trop long'),
});

describe('Contact Form Validation', () => {
    it('accepts valid form data', () => {
        const result = contactSchema.safeParse({
            fullName: 'Thomas Anderson',
            email: 't.anderson@metacortex.com',
            company: 'MetaCortex',
            message: 'Je cherche a automatiser un flux complexe.',
        });
        expect(result.success).toBe(true);
    });

    it('rejects empty name', () => {
        const result = contactSchema.safeParse({
            fullName: '',
            email: 'test@test.com',
            message: 'A valid message here',
        });
        expect(result.success).toBe(false);
    });

    it('rejects invalid email', () => {
        const result = contactSchema.safeParse({
            fullName: 'John Doe',
            email: 'not-an-email',
            message: 'A valid message here',
        });
        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error.issues[0].path).toContain('email');
        }
    });

    it('rejects short message', () => {
        const result = contactSchema.safeParse({
            fullName: 'John Doe',
            email: 'test@test.com',
            message: 'Short',
        });
        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error.issues[0].path).toContain('message');
        }
    });

    it('allows optional company field', () => {
        const result = contactSchema.safeParse({
            fullName: 'John Doe',
            email: 'test@test.com',
            message: 'A sufficiently long message for validation',
        });
        expect(result.success).toBe(true);
    });

    it('rejects message over 2000 chars', () => {
        const result = contactSchema.safeParse({
            fullName: 'John Doe',
            email: 'test@test.com',
            message: 'x'.repeat(2001),
        });
        expect(result.success).toBe(false);
    });
});
