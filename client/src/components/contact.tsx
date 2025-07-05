import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock, CheckCircle, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We will get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-white" />,
      title: "Office Location",
      description: "New Cairo, Egypt\n5th Settlement, Building 12"
    },
    {
      icon: <Phone className="text-white" />,
      title: "Phone",
      description: "+20 2 1234 5678"
    },
    {
      icon: <Mail className="text-white" />,
      title: "Email",
      description: "hello@saudimarketing.eg"
    },
    {
      icon: <Clock className="text-white" />,
      title: "Business Hours",
      description: "Sunday - Thursday: 9:00 AM - 6:00 PM\nFriday - Saturday: Closed"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin />, href: "#" },
    { icon: <Instagram />, href: "#" },
    { icon: <Twitter />, href: "#" },
    { icon: <Facebook />, href: "#" }
  ];

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to elevate your brand in the Egyptian market? Let's discuss how Saudi Marketing 
              can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-off-white p-8 rounded-xl">
              <h3 className="font-playfair text-2xl font-semibold mb-6">Send us a message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interest *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="digital-campaigns">Digital Campaigns</SelectItem>
                            <SelectItem value="brand-identity">Brand Identity</SelectItem>
                            <SelectItem value="market-research">Market Research</SelectItem>
                            <SelectItem value="content-creation">Content Creation</SelectItem>
                            <SelectItem value="partnership-marketing">Partnership Marketing</SelectItem>
                            <SelectItem value="digital-presence">Digital Presence</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={5}
                            placeholder="Tell us about your project and how we can help..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-black text-white hover:bg-gray-800"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className="bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Response Promise */}
              <div className="bg-black text-white p-6 rounded-xl">
                <h4 className="font-playfair text-xl font-semibold mb-3">Quick Response Promise</h4>
                <p className="text-gray-300 mb-4">
                  We understand the fast-paced nature of the Egyptian market. That's why we guarantee a response within 24 hours.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="text-green-400 w-4 h-4" />
                  <span>24-hour response guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
