// components/landing/AutoDemoSection.tsx
'use client';
import React from 'react';
import { PreviewComparison } from './auto-demo/PreviewComparison';

export function AutoDemoSection() {
    return (
        <div className="w-full flex flex-col items-center space-y-12">
            <div className="w-full max-w-2xl">
                <PreviewComparison />
            </div>
        </div>
    );
}