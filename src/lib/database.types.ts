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
            users: {
                Row: {
                    id: string
                    email: string
                    name: string | null
                    role: 'admin' | 'organiser' | 'volunteer' | 'viewer'
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    email: string
                    name?: string | null
                    role: 'admin' | 'organiser' | 'volunteer' | 'viewer'
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    email?: string
                    name?: string | null
                    role?: 'admin' | 'organiser' | 'volunteer' | 'viewer'
                    created_at?: string | null
                }
                Relationships: []
            }
            teams: {
                Row: {
                    id: string
                    name: string
                    captain_name: string
                    captain_phone: string
                    captain_email: string | null
                    num_players: number | null
                    logo_url: string | null
                    registration_status: 'pending' | 'paid' | 'confirmed' | 'rejected' | null
                    payment_id: string | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    name: string
                    captain_name: string
                    captain_phone: string
                    captain_email?: string | null
                    num_players?: number | null
                    logo_url?: string | null
                    registration_status?: 'pending' | 'paid' | 'confirmed' | 'rejected' | null
                    payment_id?: string | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    name?: string
                    captain_name?: string
                    captain_phone?: string
                    captain_email?: string | null
                    num_players?: number | null
                    logo_url?: string | null
                    registration_status?: 'pending' | 'paid' | 'confirmed' | 'rejected' | null
                    payment_id?: string | null
                    created_at?: string | null
                }
                Relationships: []
            }
            payments: {
                Row: {
                    id: string
                    payment_ref: string | null
                    method: 'mpesa' | 'paypal' | 'card' | null
                    amount: number
                    status: 'initiated' | 'success' | 'failed' | 'pending' | null
                    raw_payload: Json | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    payment_ref?: string | null
                    method?: 'mpesa' | 'paypal' | 'card' | null
                    amount: number
                    status?: 'initiated' | 'success' | 'failed' | 'pending' | null
                    raw_payload?: Json | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    payment_ref?: string | null
                    method?: 'mpesa' | 'paypal' | 'card' | null
                    amount?: number
                    status?: 'initiated' | 'success' | 'failed' | 'pending' | null
                    raw_payload?: Json | null
                    created_at?: string | null
                }
                Relationships: []
            }
            fixtures: {
                Row: {
                    id: string
                    date: string
                    time: string | null
                    venue: string | null
                    team_a: string | null
                    team_b: string | null
                    status: 'scheduled' | 'playing' | 'finished' | 'postponed' | null
                    score_a: number | null
                    score_b: number | null
                    created_by: string | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    date: string
                    time?: string | null
                    venue?: string | null
                    team_a?: string | null
                    team_b?: string | null
                    status?: 'scheduled' | 'playing' | 'finished' | 'postponed' | null
                    score_a?: number | null
                    score_b?: number | null
                    created_by?: string | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    date?: string
                    time?: string | null
                    venue?: string | null
                    team_a?: string | null
                    team_b?: string | null
                    status?: 'scheduled' | 'playing' | 'finished' | 'postponed' | null
                    score_a?: number | null
                    score_b?: number | null
                    created_by?: string | null
                    created_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "fixtures_team_a_fkey"
                        columns: ["team_a"]
                        isOneToOne: false
                        referencedRelation: "teams"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fixtures_team_b_fkey"
                        columns: ["team_b"]
                        isOneToOne: false
                        referencedRelation: "teams"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fixtures_created_by_fkey"
                        columns: ["created_by"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            workshop_signups: {
                Row: {
                    id: string
                    name: string
                    phone: string
                    email: string | null
                    interests: string[] | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    name: string
                    phone: string
                    email?: string | null
                    interests?: string[] | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    name?: string
                    phone?: string
                    email?: string | null
                    interests?: string[] | null
                    created_at?: string | null
                }
                Relationships: []
            }
            sponsors: {
                Row: {
                    id: string
                    name: string | null
                    logo_url: string | null
                    level: string | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    name?: string | null
                    logo_url?: string | null
                    level?: string | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    name?: string | null
                    logo_url?: string | null
                    level?: string | null
                    created_at?: string | null
                }
                Relationships: []
            }
            audit_logs: {
                Row: {
                    id: string
                    actor: string | null
                    action: string | null
                    resource_type: string | null
                    resource_id: string | null
                    details: Json | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    actor?: string | null
                    action?: string | null
                    resource_type?: string | null
                    resource_id?: string | null
                    details?: Json | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    actor?: string | null
                    action?: string | null
                    resource_type?: string | null
                    resource_id?: string | null
                    details?: Json | null
                    created_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "audit_logs_actor_fkey"
                        columns: ["actor"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            skills_modules: {
                Row: {
                    id: string
                    title: string
                    description: string | null
                    video_url: string | null
                    content: string | null
                    published: boolean | null
                    order_index: number | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    title: string
                    description?: string | null
                    video_url?: string | null
                    content?: string | null
                    published?: boolean | null
                    order_index?: number | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    title?: string
                    description?: string | null
                    video_url?: string | null
                    content?: string | null
                    published?: boolean | null
                    order_index?: number | null
                    created_at?: string | null
                }
                Relationships: []
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
