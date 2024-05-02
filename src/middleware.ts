import { NextRequest, NextResponse } from "next/server"
import { useLocalStorage } from "./hooks/useLocalStorage";
import { cookies } from 'next/headers'

const protectRoutes = ['/home']
const publicRoutes = ['/brian']

export default async function middleware(req: NextRequest) {
    //const [user, setUser] = useLocalStorage("user", "");

    const path = req.nextUrl.pathname;
    const isProtected = protectRoutes.includes(path);
    const isPublic = publicRoutes.includes(path);
    // const cookie = cookies().get('user')?.value
    const cookie = req.cookies.get("user")?.value;
    
    if(!cookie && isProtected){
        return NextResponse.redirect(new URL('/brian', req.nextUrl))
    }
  
    if(isPublic && cookie && !req.nextUrl.pathname.startsWith('/home')){
        return NextResponse.redirect(new URL('/home', req.nextUrl))
    }
    return NextResponse.next();
    
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  }