
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Pencil, Save, Github, Twitter, Instagram, Facebook, Mail } from 'lucide-react';

interface FooterContent {
  id: string;
  about_text: string;
  contact_email: string;
  privacy_text: string;
  terms_text: string;
  social_links: {
    github: string;
    twitter: string;
    instagram: string;
    facebook: string;
  };
  created_at: string;
  updated_at: string;
}

export const Footer = () => {
  const { data: isAdmin } = useIsAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [privacyText, setPrivacyText] = useState('');
  const [termsText, setTermsText] = useState('');
  const [socialLinks, setSocialLinks] = useState({
    github: '',
    twitter: '',
    instagram: '',
    facebook: ''
  });

  const { data: footerContent, isLoading, refetch } = useQuery({
    queryKey: ['footer-content'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('footer_content')
        .select('*')
        .order('updated_at', { ascending: false })
        .limit(1)
        .single();
        
      if (error && error.code !== 'PGRST116') {
        throw error;
      }
      
      return data as FooterContent || null;
    }
  });

  // Use useEffect to set state when data is loaded
  useEffect(() => {
    if (footerContent) {
      setAboutText(footerContent.about_text || '');
      setContactEmail(footerContent.contact_email || '');
      setPrivacyText(footerContent.privacy_text || '');
      setTermsText(footerContent.terms_text || '');
      setSocialLinks(footerContent.social_links || {
        github: '',
        twitter: '',
        instagram: '',
        facebook: ''
      });
    } else if (!isLoading) {
      // Default values when no data is found
      setAboutText('Multi Project Association (MPA) is a platform for managing projects, collaborating with team members, and tracking progress.');
      setContactEmail('contact@mpa.example.com');
      setPrivacyText('Your privacy is important to us. We collect minimal data and use it only for service improvement.');
      setTermsText('By using MPA, you agree to our terms of service.');
      setSocialLinks({
        github: 'https://github.com/Jamal0602/MPA',
        twitter: '',
        instagram: '',
        facebook: ''
      });
    }
  }, [footerContent, isLoading]);

  const handleSave = async () => {
    try {
      const updateData = {
        about_text: aboutText,
        contact_email: contactEmail,
        privacy_text: privacyText,
        terms_text: termsText,
        social_links: socialLinks,
        updated_at: new Date().toISOString()
      };

      if (footerContent?.id) {
        // Update existing record
        const { error } = await supabase
          .from('footer_content')
          .update(updateData)
          .eq('id', footerContent.id);
          
        if (error) throw error;
      } else {
        // Insert new record
        const { error } = await supabase
          .from('footer_content')
          .insert([updateData]);
          
        if (error) throw error;
      }
      
      toast.success('Footer content updated successfully');
      setIsEditing(false);
      refetch();
    } catch (error: any) {
      toast.error(`Error updating footer content: ${error.message}`);
    }
  };

  return (
    <footer className="bg-background border-t py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About MPA</h3>
            {isEditing ? (
              <Textarea 
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
                rows={4}
              />
            ) : (
              <p className="text-muted-foreground">{aboutText}</p>
            )}
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            {isEditing ? (
              <Input 
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Contact email"
              />
            ) : (
              <p className="text-muted-foreground">
                <Mail className="inline mr-2 h-4 w-4" />
                {contactEmail}
              </p>
            )}
            <div className="flex space-x-4 mt-4">
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
              )}
            </div>
            {isEditing && (
              <div className="space-y-2 mt-4">
                <Input 
                  value={socialLinks.github || ''}
                  onChange={(e) => setSocialLinks({...socialLinks, github: e.target.value})}
                  placeholder="GitHub URL"
                  className="mb-2"
                />
                <Input 
                  value={socialLinks.twitter || ''}
                  onChange={(e) => setSocialLinks({...socialLinks, twitter: e.target.value})}
                  placeholder="Twitter URL"
                  className="mb-2"
                />
                <Input 
                  value={socialLinks.instagram || ''}
                  onChange={(e) => setSocialLinks({...socialLinks, instagram: e.target.value})}
                  placeholder="Instagram URL"
                  className="mb-2"
                />
                <Input 
                  value={socialLinks.facebook || ''}
                  onChange={(e) => setSocialLinks({...socialLinks, facebook: e.target.value})}
                  placeholder="Facebook URL"
                />
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Privacy Policy</h3>
            {isEditing ? (
              <Textarea 
                value={privacyText}
                onChange={(e) => setPrivacyText(e.target.value)}
                rows={4}
              />
            ) : (
              <p className="text-muted-foreground">{privacyText}</p>
            )}
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Terms of Service</h3>
            {isEditing ? (
              <Textarea 
                value={termsText}
                onChange={(e) => setTermsText(e.target.value)}
                rows={4}
              />
            ) : (
              <p className="text-muted-foreground">{termsText}</p>
            )}
          </div>
        </div>
        
        {isAdmin && (
          <div className="mt-8 flex justify-end">
            {isEditing ? (
              <Button onClick={handleSave} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            ) : (
              <Button onClick={() => setIsEditing(true)} variant="outline" className="flex items-center gap-2">
                <Pencil className="h-4 w-4" />
                Edit Footer
              </Button>
            )}
          </div>
        )}
        
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Multi Project Association. All rights reserved.</p>
          <p className="mt-1">
            <a href="/terms" className="hover:text-primary">Terms</a> · 
            <a href="/privacy" className="hover:text-primary ml-2">Privacy</a> · 
            <a href="/cookies" className="hover:text-primary ml-2">Cookies</a>
          </p>
          <div className="mt-2 text-xs">
            <Link to="/report-error" className="text-primary hover:underline">Report an Issue</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
