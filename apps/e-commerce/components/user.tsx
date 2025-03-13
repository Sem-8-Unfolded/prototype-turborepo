import { auth } from '@repo/shopify-auth/server';

export default async function UserSession() {
    const session = await auth();
    return (
        <div className="space-x-4">
            {
                session ? (
                    <div className="flex items-center space-x-4">
                        <div>{session.user.name}</div>
                    </div>
                ) : (
                    <a href="/login" className="text-white">Login</a>
                )
            }
        </div>
    );
}