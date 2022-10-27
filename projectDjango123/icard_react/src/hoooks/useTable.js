import { useState } from "react";
import { getTablesApi } from "../api/table"
import { useAuth } from "./";


export function useTable() {
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);
    const [tables, setTables] = useState(null);

    const { auth } = useAuth();

    const getTables = async () => {
        try {
            setloading(true);
            const response = await getTablesApi(auth.token);
            setloading(false);
            setTables(response);
        } catch (error) {
            setloading(false);
            setError(error)
            
        }

    };
    
    return {
        loading,
        error,
        tables,
        getTables,
    }

}