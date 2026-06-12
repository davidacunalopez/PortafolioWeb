const webhookUrl: string | undefined = import.meta.env.VITE_N8N_WEBHOOK_URL || undefined;

export const subscribeConfigured = Boolean(webhookUrl);

export async function subscribe(email: string, lang: string): Promise<void> {
  if (!webhookUrl) throw new Error('Subscribe webhook is not configured');
  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, lang, source: 'portfolio' }),
  });
  if (!res.ok) throw new Error(`Subscribe failed with status ${res.status}`);
}
