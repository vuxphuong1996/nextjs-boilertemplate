import { useRouter } from 'next/router';
import { LandingLayout, AdminLayout, BlankLayout } from '@Layouts';

const GetLayout = () => {
    const router = useRouter();
    const ISSERVER = typeof window === 'undefined';
    let isToken;
    if (!ISSERVER) {
        isToken = localStorage.getItem('token');
    }

    if (router.pathname.includes('admin')) {
        if (typeof window !== 'undefined' && !isToken) {
            router.push('/login');
        }
        return AdminLayout;
    }

    if (router.pathname.includes('login')) {
        return BlankLayout;
    }

    return LandingLayout;
};

export default GetLayout;
