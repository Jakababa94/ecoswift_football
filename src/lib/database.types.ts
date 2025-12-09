export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            teams: {
                Row: {
                    id: string
                    created_at: string
                    team_name: string
                    town: string
                    contact_name: string
                    contact_phone: string
                    contact_email: string
                    captain_name: string | null
                    captain_id: string | null
                    players_count: number | null
                    payment_method: string | null
                    payment_status: string | null
                    logo_url: string | null
                    website_url: string | null
                }
                Insert: {
                    id?: string
                    created_at?: string
                    team_name: string
                    town: string
                    contact_name: string
                    contact_phone: string
                    contact_email: string
                    captain_name?: string | null
                    players_count?: number | null
                    payment_method?: string | null
                    payment_status?: string | null
                    logo_url?: string | null
                    website_url?: string | null
                }
                Update: {
                    id?: string
                    created_at?: string
                    team_name?: string
                    town?: string
                    contact_name?: string
                    contact_phone?: string
                    contact_email?: string
                    captain_name?: string | null
                    players_count?: number | null
                    payment_method?: string | null
                    payment_status?: string | null
                    logo_url?: string | null
                    website_url?: string | null
                }
                Relationships: []
            }
            players: {
                Row: {
                    id: string
                    team_id: string
                    name: string
                    position: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    team_id: string
                    name: string
                    position?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    team_id?: string
                    name?: string
                    position?: string | null
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "players_team_id_fkey"
                        columns: ["team_id"]
                        isOneToOne: false
                        referencedRelation: "teams"
                        referencedColumns: ["id"]
                    }
                ]
            }
            fixtures: {
                Row: {
                    id: string
                    team_a_id: string | null
                    team_b_id: string | null
                    match_date: string
                    venue: string
                    score_a: number | null
                    score_b: number | null
                    status: 'Upcoming' | 'Live' | 'Finished'
                    created_at: string
                }
                Insert: {
                    id?: string
                    team_a_id?: string | null
                    team_b_id?: string | null
                    match_date: string
                    venue: string
                    score_a?: number | null
                    score_b?: number | null
                    status?: 'Upcoming' | 'Live' | 'Finished'
                    created_at?: string
                }
                Update: {
                    id?: string
                    team_a_id?: string | null
                    team_b_id?: string | null
                    match_date?: string
                    venue?: string
                    score_a?: number | null
                    score_b?: number | null
                    status?: 'Upcoming' | 'Live' | 'Finished'
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "fixtures_team_a_id_fkey"
                        columns: ["team_a_id"]
                        isOneToOne: false
                        referencedRelation: "teams"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fixtures_team_b_id_fkey"
                        columns: ["team_b_id"]
                        isOneToOne: false
                        referencedRelation: "teams"
                        referencedColumns: ["id"]
                    }
                ]
            }
            workshops: {
                Row: {
                    id: string
                    title: string
                    category: string
                    resource_url: string | null
                    registered_users: Json
                    created_at: string
                }
                Insert: {
                    id?: string
                    title: string
                    category: string
                    resource_url?: string | null
                    registered_users?: Json
                    created_at?: string
                }
                Update: {
                    id?: string
                    title?: string
                    category?: string
                    resource_url?: string | null
                    registered_users?: Json
                    created_at?: string
                }
                Relationships: []
            }
            transactions: {
                Row: {
                    id: string
                    team_id: string | null
                    amount: number
                    provider: 'M-Pesa' | 'PayPal' | 'Stripe'
                    transaction_code: string
                    status: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    team_id?: string | null
                    amount: number
                    provider: 'M-Pesa' | 'PayPal' | 'Stripe'
                    transaction_code: string
                    status?: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    team_id?: string | null
                    amount?: number
                    provider?: 'M-Pesa' | 'PayPal' | 'Stripe'
                    transaction_code?: string
                    status?: string
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "transactions_team_id_fkey"
                        columns: ["team_id"]
                        isOneToOne: false
                        referencedRelation: "teams"
                        referencedColumns: ["id"]
                    }
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
