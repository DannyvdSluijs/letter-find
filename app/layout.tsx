import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Letter Grid</title>
            <style>
                {`
                    @page {
                        size: auto;
                        margin: 0mm;
                    }
                `}
            </style>
        </head>
        <body className="w-screen h-screen flex justify-center items-start bg-white">
            {children}
        </body>
        </html>
    )
}