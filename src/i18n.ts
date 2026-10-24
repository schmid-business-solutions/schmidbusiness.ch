export type Lang = 'de' | 'en';

export const routes = {
	home: { de: '/', en: '/en/' },
	imprint: { de: '/impressum/', en: '/en/imprint/' },
	privacy: { de: '/datenschutz/', en: '/en/privacy/' },
	terms: { de: '/agb/', en: '/en/terms/' },
} as const;

export const linkedin = 'https://www.linkedin.com/in/ivanschmid/';

export type PageKey = keyof typeof routes;

export const ui = {
	de: {
		htmlLang: 'de-CH',
		ogLocale: 'de_CH',
		description:
			'Ivan Schmid – Unternehmer aus Steffisburg. Seit über 25 Jahren baue ich Unternehmen, Produkte und digitale Plattformen auf.',
		homeAria: 'Schmid Business Solutions – Startseite',
		contactLink: 'Kontakt',
		langLabel: 'Sprache',
		country: 'Schweiz',
		footerContact: 'Kontakt',
		legalNav: 'Rechtliches',
		imprint: 'Impressum',
		privacy: 'Datenschutz',
		terms: 'AGB',
		home: {
			title: 'Ivan Schmid – Unternehmer',
			h1a: 'Aus Ideen',
			h1b: 'werden Unternehmen.',
			metaLeft: 'Ivan Schmid · Unternehmer',
			metaRight: 'Steffisburg · Schweiz',
			imgAlt: 'Ivan Schmid an seinem Arbeitsplatz mit Blick auf den Thunersee',
			about: 'Über mich',
			lead: 'Ich bin Unternehmer aus Überzeugung. Seit über 25 Jahren baue ich Unternehmen, Produkte und digitale Plattformen auf – unter anderem als Gründer von Payrexx, Hotelcard, Comvation und 1Daily.',
			partner: 'Offizieller Payrexx Solution Partner',
			contact: 'Kontakt',
			h2a: 'Ich freue mich',
			h2b: 'auf Ihre Nachricht.',
		},
		form: {
			name: 'Name',
			email: 'E-Mail',
			message: 'Nachricht',
			consent: 'Ihre Angaben werden nur zur Beantwortung Ihrer Anfrage verwendet.',
			send: 'Nachricht senden',
			sending: 'Wird gesendet …',
			success: 'Vielen Dank für Ihre Nachricht. Ich melde mich zeitnah persönlich bei Ihnen.',
			error:
				'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder schreiben Sie direkt an office@schmidbusiness.ch.',
			unavailable: 'Das Formular ist gerade nicht verfügbar. Bitte schreiben Sie direkt an office@schmidbusiness.ch.',
		},
		back: '← Zur Startseite',
	},
	en: {
		htmlLang: 'en',
		ogLocale: 'en_GB',
		description:
			'Ivan Schmid – entrepreneur based in Steffisburg, Switzerland. For more than 25 years I have been building companies, products and digital platforms.',
		homeAria: 'Schmid Business Solutions – Home',
		contactLink: 'Contact',
		langLabel: 'Language',
		country: 'Switzerland',
		footerContact: 'Contact',
		legalNav: 'Legal',
		imprint: 'Legal notice',
		privacy: 'Privacy',
		terms: 'Terms',
		home: {
			title: 'Ivan Schmid – Entrepreneur',
			h1a: 'Where ideas',
			h1b: 'become companies.',
			metaLeft: 'Ivan Schmid · Entrepreneur',
			metaRight: 'Steffisburg · Switzerland',
			imgAlt: 'Ivan Schmid at his desk overlooking Lake Thun',
			about: 'About me',
			lead: 'I am an entrepreneur by conviction. For more than 25 years I have been building companies, products and digital platforms – among others as founder of Payrexx, Hotelcard, Comvation and 1Daily.',
			partner: 'Official Payrexx Solution Partner',
			contact: 'Contact',
			h2a: 'I look forward',
			h2b: 'to hearing from you.',
		},
		form: {
			name: 'Name',
			email: 'Email',
			message: 'Message',
			consent: 'Your details are used solely to respond to your enquiry.',
			send: 'Send message',
			sending: 'Sending …',
			success: 'Thank you for your message. I will get back to you personally shortly.',
			error:
				'Something went wrong while sending. Please try again later or write directly to office@schmidbusiness.ch.',
			unavailable: 'The form is currently unavailable. Please write directly to office@schmidbusiness.ch.',
		},
		back: '← Back to home',
	},
} as const;
