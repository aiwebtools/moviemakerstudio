
export default function Footer() {
  return <footer className="bg-script-paper border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold font-display tracking-tight group">
                Movie Script Writer <span className="text-script-accent group-hover:animate-pulse-glow">GPT</span>
              </span>
              <span className="text-xs text-gray-400">Presented by AiWebTools.Ai</span>
            </div>
            <p className="text-sm text-script-muted mt-2 max-w-md">
              The ultimate AI assistant for creating industry-standard movie scripts from concept to final draft.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="font-semibold mb-3 text-white">Writing Tools</h3>
              <ul className="space-y-2">
                <li><a href="https://chatgpt.com/g/g-35psQsJil-movie-script-writer-gpt-original-version-1" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-script-accent transition-colors">Movie Script Writer GPT Version 1</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-script-accent transition-colors">Movie Script Writer Version 2</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-script-accent transition-colors">Book Writer GPT</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-300 hover:text-script-accent transition-colors">Writing Guide</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-script-accent transition-colors">FAQ</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-script-accent transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-script-accent transition-colors">About Us</a></li>
                <li><a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-script-accent transition-colors">Privacy</a></li>
                <li><a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-script-accent transition-colors">Terms</a></li>
                <li>
                  <a 
                    href="https://www.aiwebtools.ai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center mt-1 px-3 py-1.5 bg-script-accent text-white rounded-md text-xs font-medium hover:bg-script-accent/90 transition-colors"
                  >
                    MORE AI TOOLS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2023 ScriptWriter AI. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-script-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-script-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-script-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>;
}
