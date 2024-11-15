import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// เปลี่ยนชื่อฟังก์ชันให้ตรงกับที่ใช้ใน login page
export const checkSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('users').select('count').single()
    if (error) throw error
    console.log('Supabase connected successfully')
    return true
  } catch (error) {
    console.error('Supabase connection error:', error.message)
    return false
  };
};