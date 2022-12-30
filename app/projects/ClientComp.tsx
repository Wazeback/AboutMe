
'use client';
import { ReactNode, useEffect } from 'react';

export default function ClientComp({children} : {[key:string]:any} ) {
  
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((element) => observer.observe(element));
    });

    return (
        <>
        {children}
        </>
    )
}
