export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Account: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      comments: {
        Row: {
          content: string
          created_at: string | null
          id: string
          post_id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          post_id: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_access: {
        Row: {
          access_level: string
          department: string
          hired_date: string | null
          id: string
          user_id: string
        }
        Insert: {
          access_level?: string
          department: string
          hired_date?: string | null
          id?: string
          user_id: string
        }
        Update: {
          access_level?: string
          department?: string
          hired_date?: string | null
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      error_reports: {
        Row: {
          browser_info: Json | null
          category: string | null
          contact_email: string
          created_at: string | null
          description: string
          error_type: string
          id: string
          platform: string | null
          priority: string | null
          resolution_notes: string | null
          resolved_at: string | null
          resolved_by: string | null
          screenshots: string[] | null
          status: string
          transaction_id: string | null
          user_id: string | null
        }
        Insert: {
          browser_info?: Json | null
          category?: string | null
          contact_email: string
          created_at?: string | null
          description: string
          error_type: string
          id?: string
          platform?: string | null
          priority?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          screenshots?: string[] | null
          status?: string
          transaction_id?: string | null
          user_id?: string | null
        }
        Update: {
          browser_info?: Json | null
          category?: string | null
          contact_email?: string
          created_at?: string | null
          description?: string
          error_type?: string
          id?: string
          platform?: string | null
          priority?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          screenshots?: string[] | null
          status?: string
          transaction_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      job_applications: {
        Row: {
          age: number
          created_at: string | null
          email: string
          experience: string
          feedback: string | null
          full_name: string
          id: string
          location: string
          message: string
          portfolio: string | null
          position: string
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          age: number
          created_at?: string | null
          email: string
          experience: string
          feedback?: string | null
          full_name: string
          id?: string
          location: string
          message: string
          portfolio?: string | null
          position: string
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          age?: number
          created_at?: string | null
          email?: string
          experience?: string
          feedback?: string | null
          full_name?: string
          id?: string
          location?: string
          message?: string
          portfolio?: string | null
          position?: string
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      key_points_transactions: {
        Row: {
          amount: number
          created_at: string | null
          description: string
          id: string
          transaction_type: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          description: string
          id?: string
          transaction_type: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string
          id?: string
          transaction_type?: string
          user_id?: string
        }
        Relationships: []
      }
      links: {
        Row: {
          clicks: number | null
          created_at: string | null
          id: string
          short_code: string
          url: string
          user_id: string
        }
        Insert: {
          clicks?: number | null
          created_at?: string | null
          id?: string
          short_code: string
          url: string
          user_id: string
        }
        Update: {
          clicks?: number | null
          created_at?: string | null
          id?: string
          short_code?: string
          url?: string
          user_id?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean
          message: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean
          message: string
          title: string
          type?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean
          message?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          comments_count: number | null
          content: string | null
          created_at: string | null
          id: string
          likes_count: number | null
          project_id: string
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          comments_count?: number | null
          content?: string | null
          created_at?: string | null
          id?: string
          likes_count?: number | null
          project_id: string
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          comments_count?: number | null
          content?: string | null
          created_at?: string | null
          id?: string
          likes_count?: number | null
          project_id?: string
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      Posts: {
        Row: {
          author: string | null
          comments: number | null
          content: string | null
          created_at: string | null
          id: number
          likes: number | null
          title: string
        }
        Insert: {
          author?: string | null
          comments?: number | null
          content?: string | null
          created_at?: string | null
          id?: number
          likes?: number | null
          title: string
        }
        Update: {
          author?: string | null
          comments?: number | null
          content?: string | null
          created_at?: string | null
          id?: number
          likes?: number | null
          title?: string
        }
        Relationships: []
      }
      Profile: {
        Row: {
          id: number
          post_count: number | null
          username: string
        }
        Insert: {
          id?: number
          post_count?: number | null
          username: string
        }
        Update: {
          id?: number
          post_count?: number | null
          username?: string
        }
        Relationships: []
      }
      profile_audit_log: {
        Row: {
          changed_at: string | null
          changed_by: string | null
          field_changed: string
          id: string
          new_value: string | null
          old_value: string | null
          profile_id: string
        }
        Insert: {
          changed_at?: string | null
          changed_by?: string | null
          field_changed: string
          id?: string
          new_value?: string | null
          old_value?: string | null
          profile_id: string
        }
        Update: {
          changed_at?: string | null
          changed_by?: string | null
          field_changed?: string
          id?: string
          new_value?: string | null
          old_value?: string | null
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_audit_log_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          country: string | null
          created_at: string | null
          district: string | null
          full_name: string | null
          id: string
          key_points: number | null
          last_login: string | null
          mpa_id: string | null
          place: string | null
          referral_code: string | null
          referred_by: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          state: string | null
          theme_preference: string | null
          updated_at: string | null
          user_configuration: Json | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          country?: string | null
          created_at?: string | null
          district?: string | null
          full_name?: string | null
          id: string
          key_points?: number | null
          last_login?: string | null
          mpa_id?: string | null
          place?: string | null
          referral_code?: string | null
          referred_by?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          state?: string | null
          theme_preference?: string | null
          updated_at?: string | null
          user_configuration?: Json | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          country?: string | null
          created_at?: string | null
          district?: string | null
          full_name?: string | null
          id?: string
          key_points?: number | null
          last_login?: string | null
          mpa_id?: string | null
          place?: string | null
          referral_code?: string | null
          referred_by?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          state?: string | null
          theme_preference?: string | null
          updated_at?: string | null
          user_configuration?: Json | null
          username?: string
        }
        Relationships: []
      }
      project_members: {
        Row: {
          id: string
          joined_at: string | null
          project_id: string
          role: string | null
          user_id: string
        }
        Insert: {
          id?: string
          joined_at?: string | null
          project_id: string
          role?: string | null
          user_id: string
        }
        Update: {
          id?: string
          joined_at?: string | null
          project_id?: string
          role?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          owner_id: string
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          owner_id: string
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          owner_id?: string
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_codes: {
        Row: {
          code: string
          created_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          code: string
          created_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          code?: string
          created_at?: string | null
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          bonus_earned: number | null
          completed_at: string | null
          created_at: string | null
          id: string
          referred_id: string
          referrer_id: string
          status: string
        }
        Insert: {
          bonus_earned?: number | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          referred_id: string
          referrer_id: string
          status?: string
        }
        Update: {
          bonus_earned?: number | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          referred_id?: string
          referrer_id?: string
          status?: string
        }
        Relationships: []
      }
      widgets: {
        Row: {
          created_at: string | null
          created_by: string
          description: string | null
          id: string
          position: Json | null
          project_id: string
          settings: Json | null
          status: string | null
          title: string
          type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          description?: string | null
          id?: string
          position?: Json | null
          project_id: string
          settings?: Json | null
          status?: string | null
          title: string
          type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          description?: string | null
          id?: string
          position?: Json | null
          project_id?: string
          settings?: Json | null
          status?: string | null
          title?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "widgets_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "widgets_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      admin_analytics_summary: {
        Row: {
          active_users: number | null
          recent_orders: number | null
          total_employees: number | null
          total_orders: number | null
          total_users: number | null
        }
        Relationships: []
      }
      error_report_stats: {
        Row: {
          avg_resolution_time_hours: number | null
          in_progress_reports: number | null
          pending_reports: number | null
          reports_last_24h: number | null
          resolved_reports: number | null
          total_reports: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      decrement_points: {
        Args: {
          user_id: string
          amount_to_deduct: number
          description?: string
        }
        Returns: number
      }
      get_admin_analytics: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_error_report_stats: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      is_admin: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
      process_referral_bonus: {
        Args: {
          referred_user_id: string
          referrer_code: string
        }
        Returns: undefined
      }
      regenerate_mpa_id: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_error_report_status: {
        Args: {
          report_id: string
          new_status: string
          resolution_notes?: string
        }
        Returns: boolean
      }
    }
    Enums: {
      user_role: "admin" | "user" | "employee"
      widget_type: "chart" | "stats" | "list" | "calendar"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
