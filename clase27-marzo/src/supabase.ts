import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://buycomlqovnusssmmlt.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1eWNvbWxxb3ZudXNzc21tbHV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NjEwMzUsImV4cCI6MjA5NDQzNzAzNX0.gcRJzP1HcuWG7g6w6As4h5AwZtQOysgZsp8JaI_qHAQ"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
