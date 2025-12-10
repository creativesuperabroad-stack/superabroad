import React, { useState } from 'react';
import { Award, Clock, Briefcase, Globe, TrendingUp, Microscope, Users, Calendar, MapPin, Phone, Mail, CheckCircle, ChevronDown } from 'lucide-react';
import { mockData } from '../mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || window.location.origin;

const iconMap = {
  Award, Clock, Briefcase, Globe, TrendingUp, Microscope, Users, Calendar
};

const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'USA', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
];

const LandingPage = () => {
  const [formData, setFormData] = useState({
    course: '',
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    useWhatsApp: false,
    agreeTerms: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    try {
      toast.loading('Submitting your inquiry...');
      
      const response = await axios.post(`${BACKEND_URL}/api/leads`, formData);
      
      toast.dismiss();
      
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({
          course: '',
          fullName: '',
          email: '',
          countryCode: '+91',
          phone: '',
          useWhatsApp: false,
          agreeTerms: false
        });
      }
    } catch (error) {
      toast.dismiss();
      const errorMessage = error.response?.data?.detail || 'Something went wrong. Please try again.';
      toast.error(errorMessage);
      console.error('Error submitting lead:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_66358337-3b3c-47ec-82f2-38a6f06c31bc/artifacts/b1mzki5x_Super%20Abroad%20logo.png" 
                alt="Super Abroad Logo" 
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#why-uk" className="text-slate-600 hover:text-orange-500 transition-colors">Why UK</a>
              <a href="#universities" className="text-slate-600 hover:text-orange-500 transition-colors">Universities</a>
              <a href="#courses" className="text-slate-600 hover:text-orange-500 transition-colors">Courses</a>
              <a href="#scholarships" className="text-slate-600 hover:text-orange-500 transition-colors">Scholarships</a>
              <a href="https://www.superabroad.in" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-orange-500 transition-colors">Visit Website</a>
              <a href="#contact" className="text-slate-600 hover:text-orange-500 transition-colors">Contact</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600">Get Free Counseling</Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Form */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                  🎓 Your Gateway to World-Class Education
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {mockData.hero.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {mockData.hero.subtitle}
              </p>
              <p className="text-lg text-slate-500">
                {mockData.hero.description}
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {mockData.statistics.slice(0, 4).map((stat, index) => {
                  const Icon = iconMap[stat.icon];
                  return (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <Icon className="h-6 w-6 text-orange-500 mb-2" />
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Start Your UK Journey</h3>
                <p className="text-slate-600">Fill in your details and our expert counselors will guide you</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Course Interest */}
                <div className="space-y-2">
                  <Label htmlFor="course">Course Interested In</Label>
                  <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business-analytics">Business Analytics</SelectItem>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                      <SelectItem value="mba">MBA</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="medicine">Medicine</SelectItem>
                      <SelectItem value="finance">Finance & Accounting</SelectItem>
                      <SelectItem value="law">Law</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                {/* Phone Number with Country Code */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex gap-2">
                    <Select value={formData.countryCode} onValueChange={(value) => setFormData({...formData, countryCode: value})}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.flag} {country.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input 
                      id="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="flex-1"
                      required
                    />
                  </div>
                </div>

                {/* WhatsApp Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="whatsapp"
                    checked={formData.useWhatsApp}
                    onCheckedChange={(checked) => setFormData({...formData, useWhatsApp: checked})}
                  />
                  <label htmlFor="whatsapp" className="text-sm text-slate-600 cursor-pointer">
                    Use this number for WhatsApp updates
                  </label>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked})}
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer">
                    I agree to the <a href="#" className="text-teal-600 hover:underline">terms and conditions</a> and <a href="#" className="text-teal-600 hover:underline">privacy policy</a>
                  </label>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-6">
                  Get Free Counseling
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in UK */}
      <section id="why-uk" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Study in the UK?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience world-class education, cutting-edge research, and excellent career opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.whyUK.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <div key={benefit.id} className="group p-6 rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                  <div className="bg-orange-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    <Icon className="h-7 w-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="universities" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Top UK Universities</h2>
            <p className="text-xl text-slate-600">QS World University Rankings 2025</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">QS Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">University</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {mockData.topUniversities.map((uni, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-700 font-semibold">
                          #{uni.rank}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-900">{uni.name}</td>
                      <td className="px-6 py-4 text-slate-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {uni.location}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Popular Courses</h2>
            <p className="text-xl text-slate-600">Explore high-demand programs with excellent career prospects</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.popularCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                  <p className="text-orange-50">Duration: {course.duration}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-sm text-slate-600 mb-1">Tuition Fee (per year)</div>
                    <div className="text-lg font-semibold text-slate-900">{course.avgFee}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-1">Average Salary</div>
                    <div className="text-lg font-semibold text-orange-600">{course.avgSalary}/year</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-2">Top Universities</div>
                    <ul className="space-y-1">
                      {course.topUniversities.slice(0, 3).map((uni, index) => (
                        <li key={index} className="text-sm text-slate-700 flex items-start">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          {uni}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-2">Career Opportunities</div>
                    <div className="flex flex-wrap gap-2">
                      {course.careers.slice(0, 3).map((career, index) => (
                        <span key={index} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Cost of Living</h2>
            <p className="text-xl text-slate-600">Monthly expenses by city (in GBP)</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">City</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Accommodation</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Food</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Transport</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Total (approx)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {mockData.costOfLiving.map((city, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{city.city}</td>
                      <td className="px-6 py-4 text-slate-600">{city.accommodation}</td>
                      <td className="px-6 py-4 text-slate-600">{city.food}</td>
                      <td className="px-6 py-4 text-slate-600">{city.transport}</td>
                      <td className="px-6 py-4 font-semibold text-orange-600">{city.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Scholarships for International Students</h2>
            <p className="text-xl text-slate-600">Financial support to make your UK education affordable</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {mockData.scholarships.map((scholarship, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{scholarship.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Funded by:</span>
                    <span className="font-medium text-slate-900">{scholarship.fundedBy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Amount:</span>
                    <span className="font-semibold text-orange-600">{scholarship.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Level:</span>
                    <span className="font-medium text-slate-900">{scholarship.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Deadline:</span>
                    <span className="font-medium text-slate-900">{scholarship.deadline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Study Work Visa Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Post-Study Work Opportunities</h2>
            <p className="text-xl text-slate-600">Stay and work in the UK after graduation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">2 Years</h3>
              <p className="text-slate-600">Work visa for Bachelor's & Master's graduates</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">3 Years</h3>
              <p className="text-slate-600">Extended work visa for PhD graduates</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">87.7%</h3>
              <p className="text-slate-600">Graduate employment rate in the UK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Prospects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Career Opportunities</h2>
            <p className="text-xl text-slate-600">Top in-demand jobs for UK graduates</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.topJobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                  <Briefcase className="h-5 w-5 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-4">{job.avgSalary}/year</div>
                <div className="text-sm text-slate-600 mb-2">Top Employers:</div>
                <div className="flex flex-wrap gap-2">
                  {job.employers.map((employer, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      {employer}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Find answers to common questions about studying in the UK</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {mockData.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-slate-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your UK Education Journey?</h2>
          <p className="text-xl text-orange-50 mb-8">
            Get personalized guidance from our expert counselors. Book your free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-50 text-lg px-8 py-6">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6">
              Download Free Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_66358337-3b3c-47ec-82f2-38a6f06c31bc/artifacts/b1mzki5x_Super%20Abroad%20logo.png" 
                  alt="Super Abroad Logo" 
                  className="h-16 w-auto mb-4"
                />
              </div>
              <p className="text-slate-400">
                Your trusted partner for UK education. Expert study abroad consultants helping students achieve their dreams.
              </p>
              <div className="mt-4">
                <a href="https://www.superabroad.in" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
                  www.superabroad.in
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#why-uk" className="hover:text-orange-400 transition-colors">Why UK</a></li>
                <li><a href="#universities" className="hover:text-orange-400 transition-colors">Universities</a></li>
                <li><a href="#courses" className="hover:text-orange-400 transition-colors">Courses</a></li>
                <li><a href="#scholarships" className="hover:text-orange-400 transition-colors">Scholarships</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Visa Assistance</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Application Support</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">IELTS Coaching</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Career Counseling</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <a href="tel:+918121226223" className="hover:text-orange-400 transition-colors">+91 8121226223</a>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <a href="mailto:sandeep@superabroad.in" className="hover:text-orange-400 transition-colors">sandeep@superabroad.in</a>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <a href="https://wa.me/918121226223" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">WhatsApp: +91 8121226223</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Super Abroad. All rights reserved. | <a href="https://www.superabroad.in" className="hover:text-orange-400 transition-colors">www.superabroad.in</a> | <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
