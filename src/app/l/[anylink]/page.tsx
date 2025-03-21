'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { redirects } from "@/components/config";
import { Heading } from "@/once-ui/components";

export default function Page() {
    const router = useRouter();
    const path = usePathname();
    const [_, __, target] = path.split('/');

    useEffect(() => {
        router.push(redirects(target));
    }, []);

    return <Heading
        variant={'display-strong-m'}
    >Redirecting...
    </Heading>;
}