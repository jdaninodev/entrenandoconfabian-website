export type Language = 'en' | 'es';
export type SectionId = 'home' | 'services' | 'about' | 'testimonials' | 'contact';

export interface Translations {
    companyName: string;
    nav: {
        home: string;
        services: string;
        about: string;
        testimonials: string;
        contact: string;
    };
}
