export declare class SupabaseConfig {
    private supabase;
    constructor();
    getClient(): any;
    testConnection(): Promise<boolean>;
}
export declare const createSupabaseClient: () => import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
