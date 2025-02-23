export default function UploadLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full">
            <div className="max-w-4xl mx-auto p-4">
                <div className="bg-white rounded-lg shadow-sm">
                    {children}
                </div>
            </div>
        </div>
    );
}