"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { useState } from "react"

import { Database } from "@/types_db"

interface SupaBaseProviderProps {
    children: React.ReactNode
}

const SupaBaseProvider: React.FC<SupaBaseProviderProps> = ({ children }) => {

    const [supabaseClient] = useState(() => createClientComponentClient<Database>())
    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    );
}

export default SupaBaseProvider;