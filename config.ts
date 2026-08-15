/**
 * =================================================================
 * 🚀 AQUATIC SWIMTRACK CONFIGURATION 🚀
 * =================================================================
 * This file contains all the essential settings for your application.
 * Update these values to match your own project setup.
 *
 * INSTRUCTIONS:
 * 1. Fill in your Supabase URL and Public Anon Key.
 * 2. Customize the application and competition default names.
 * =================================================================
 */

export const config = {
  /**
   * Supabase Project Credentials
   * Found in your Supabase project's "Project Settings" > "API"
   */
  supabase: {
    url: "https://wspodfqpzhueyxpnhyte.supabase.co", // 👈 VITE_SUPABASE_URL
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzcG9kZnFwemh1ZXl4cG5oeXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3NDcwMjUsImV4cCI6MjA5OTMyMzAyNX0.lhn-sdrdDc606vXS6RdT-XbErVkXLVhsoXhFpn3PA4k", // 👈 VITE_SUPABASE_ANON_KEY
  },

  /**
   * Super Admin Credentials
   * This account bypasses database authentication and provides full access.
   * IMPORTANT: Use strong, unique credentials.
   */
  superAdmin: {
    email: "muarifamir030891@gmail.com", // 👈 Change this for the super admin login
    password: "12345", // 👈 Change this for the super admin login
  },

  /**
   * Application Display Information
   * Used in page titles and headers.
   */
  app: {
    name: "R.E.A.C.T",
    title: "R.E.A.C.T",
    shortTitle: "REACT",
  },

  /**
   * Default Competition Settings
   * Used when initializing the competition for the first time or when clearing data.
   */
  competition: {
    defaultName: "My Swim Meet",
    defaultLanes: 8,
  },
};