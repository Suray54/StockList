import Link from "next/link";
import {auth} from "@/lib/better-auth/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

const Layout = async ({ children }: { children : React.ReactNode }) => {
    const session = await auth.api.getSession({ headers: await headers() })

    if(session?.user) redirect('/')

    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
                <Link href="/" className="auth-logo">
                    <span className="text-2xl font-bold text-white tracking-tight">StockList</span>
                </Link>

                <div className="pb-6 lg:pb-8 flex-1">{children}</div>
            </section>
        </main>
    )
}
export default Layout
