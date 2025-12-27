import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	try {
		const formData = await request.formData();

		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');
		const botcheck = formData.get('botcheck');

		// Honeypot check
		if (botcheck) {
			return new Response(JSON.stringify({ success: false, message: 'Bot detected' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// Validación básica
		if (!name || !email || !message) {
			return new Response(JSON.stringify({ success: false, message: 'Campos requeridos faltantes' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// Enviar a Web3Forms con API key segura
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				access_key: import.meta.env.WEB3FORM_APIKEY,
				name,
				email,
				message,
				subject: `Nuevo contacto de ${name} - Suarez y Tobar`,
			}),
		});

		const data = await response.json();

		if (data.success) {
			return new Response(JSON.stringify({ success: true }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			});
		} else {
			return new Response(JSON.stringify({ success: false, message: 'Error al enviar' }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			});
		}
	} catch (error) {
		return new Response(JSON.stringify({ success: false, message: 'Error del servidor' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
