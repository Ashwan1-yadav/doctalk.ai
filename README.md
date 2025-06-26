<div align="center">
	<img src="./assets/DocTalk.png" alt="DocTalk.ai Banner" width="80%" height="auto" style="border-radius: 10px;" >
	<h1>🩺🤖 DocTalk.ai - AI-powered doctor consultation system</h1>
	<p><strong>Designed to simulate a real doctor interaction</strong></p>
</div>

# 🩺🤖 DocTalk.ai - AI-powered doctor consultation system 


DocTalk.ai is an AI-powered doctor consultation web app that provides instant, intelligent healthcare advice anytime, anywhere. Designed to simulate a real doctor interaction, it uses natural language processing and medical data to understand symptoms, suggest possible causes, and recommend next steps—whether it's home care or seeking professional attention. With 24/7 availability, multilingual support, and a user-friendly interface, DocTalk.ai empowers users with personalized, confidential, and accessible medical guidance in just a few clicks.

### ✨ Key Features

- ⚡ **Instant AI Consultation**: Get immediate answers to health questions, symptom checks, and medical advice powered by advanced AI.
- 🕒 **24/7 Availability**: Access healthcare guidance anytime, anywhere—no appointments or waiting rooms.
- 🔒 **Confidential & Secure**: Your conversations and data are private, encrypted, and never shared.
- 🧑‍⚕️ **Personalized Recommendations**: Receive tailored advice based on your symptoms, history, and preferences.
- 🌐 **Multilingual Support**: Communicate in your preferred language for a comfortable experience.
- 💬 **User-Friendly Interface**: Simple, intuitive chat-based design for all ages and tech skill levels.
- 🧭 **Next Steps Guidance**: Know when to try home care, seek a doctor, or visit the ER.
- 🩻 **Medical Data Integration**: Leverages up-to-date medical knowledge and best practices.

## 🛠️ Tech Stack

The app is built using the following technologies:

- ⚡ **Next.js**: Modern React framework for building fast, scalable web applications.
- 🛡️ **Clerk**: User authentication and management platform for secure sign-in, sign-up, and user profiles.
- 🗣️ **Vapi**: AI voice model integration for real-time, conversational voice interactions.
- 🧠 **Gemini AI Model**: Advanced AI model for natural language understanding and medical reasoning.

These tools together enable a seamless, secure, and intelligent doctor consultation experience.


## 📁 Project Structure

```DocTalk.ai/ 
    ├── app/             # Next.js application code
    │   ├── components/  # Reusable UI components
    │   ├── context/     # React context providers
    │   ├── hooks/       # Custom React hooks
    │   ├── layout.tsx   # Layout component
    │   ├── page.tsx     # Main page component
    │   ├── pages/       # Page components
    │   ├── services/    # API integration services
    │   └── utils/       # Helper functions
    ├── public/          # Static assets           
    ├── styles/          # Global styles
    └── tsconfig.json    # TypeScript configuration 
```     

### 📱 Application Flow

1. 📝 **User Registration & Authentication**
   - Users sign up or log in using Clerk for secure authentication.
   - User profiles are created and managed.

2. 💬 **Symptom Input**
   - Users enter symptoms or health questions via a chat interface.
   - Optionally, users can use voice input powered by Vapi for hands-free interaction.

3. 🤖 **AI Consultation**
   - The Gemini AI model processes the user's input.
   - The AI analyzes symptoms, references medical data, and generates a response.

4. 🧑‍⚕️ **Personalized Recommendations**
   - The AI provides tailored advice, including:
     - Possible causes of symptoms
     - Home care suggestions
     - Recommendations to consult a doctor or seek emergency care

5. 🌐 **Multilingual Support**
   - Users can interact in their preferred language for a comfortable experience.

6. 🧭 **Next Steps & Follow-up**
   - The app suggests next steps and, if needed, helps users find nearby healthcare providers.
   - Users can review previous consultations in their history.

7. 🔒 **Confidentiality & Security**
   - All conversations are encrypted and private.
   - User data is securely stored and never shared without consent.


## ✨ Features

- 🩺 **AI-Powered Symptom Checker:** Instantly analyze symptoms and receive preliminary health guidance using advanced AI (Gemini model).
- 💬 **Conversational Chat Interface:** Intuitive, chat-based UI for natural interaction with the AI health assistant.
- 🗣️ **Voice Input Support:** Hands-free symptom entry and queries via integrated voice recognition (powered by Vapi).
- 🧑‍⚕️ **Personalized Health Recommendations:** Receive tailored advice, home care tips, and next-step suggestions based on your input.
- 🌐 **Multilingual Support:** Interact with the app in multiple languages for accessibility and comfort.
- 📜 **Consultation History:** Securely view and revisit previous AI consultations and recommendations.
- 🔐 **User Authentication:** Secure sign-up and login with Clerk, ensuring privacy and data protection.
- 🛡️ **Data Security & Privacy:** All conversations are encrypted; user data is never shared without explicit consent.
- 🏥 **Find Nearby Healthcare Providers:** Get suggestions for local clinics, hospitals, or specialists when needed.
- 📱 **Responsive & Accessible Design:** Optimized for all devices with a clean, user-friendly interface.
- 📚 **Integration with Medical Databases:** AI references up-to-date medical information for accurate responses.
- 🚨 **Emergency Guidance:** Immediate recommendations for urgent care or emergency situations.
- 🚀 **Easy Onboarding:** Simple registration and onboarding process for new users.
- 🔄 **Continuous Updates:** Regular improvements and new features based on user feedback and medical advancements.


## 🔧 Configuration

- **Environment Variables:**  
  Create a `.env` file in the `doctalk.ai` directory with the following variables:

  ```
  DATABASE_URL="your_postgresql_url"
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
  NEXT_PUBLIC_VAPI_API_KEY="your_vapi_api_key"
  NEXT_PUBLIC_API_BASE_URL="http://localhost:3000"
  CLERK_SECRET_KEY="your_clerk_secret_key"

  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
  NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
  NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
  ```

  - `DATABASE_URL`: PostgreSQL database URL.
  - `NEXT_PUBLIC_API_BASE_URL`: The base URL for backend API requests.
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk authentication public key.
  - `NEXT_PUBLIC_VAPI_API_KEY`: API key for Vapi voice input integration.
  - `CLERK_SECRET_KEY`: Clerk secret key.
  

- **Fonts & Styling:**  
  The app uses [Geist](https://vercel.com/font) fonts and [Tailwind CSS](https://tailwindcss.com/).  
  Configuration is handled in `app/layout.tsx` and `tailwind.config.js`.

- **Dependencies:**  
  All required packages are listed in `package.json`.  
  Install with `npm install` 

### Additional Notes

- 🛡️ **Clerk Setup:**  
  Sign up at [Clerk.dev](https://clerk.dev/) to obtain your publishable key and configure authentication.

- 🗣️ **Vapi Setup:**  
  Register at [Vapi.ai](https://vapi.ai/) to get your API key for voice input.

- 🧠 **Gemini AI:**  
  Obtain an API key for the Gemini model from your provider (e.g., Google Cloud).

- 🔐 **Security:**  
  Never commit your `.env` files or sensitive keys to version control.

- 🛠️ **Customizing:**  
  Update environment variables and configuration files as needed for your deployment environment (development, staging, production).

For more details, refer to the documentation in each directory or contact the project maintainer.


## 🏗️ Installation

1. 🌀 **Clone the repository:**

   ```bash
   git clone https://github.com/Ashwan1-yadav/doctalk.ai
   ```

2. 📦 **Install dependencies :**

   ```bash
   cd doctalk.ai
   npm install
   ```

3. ▶️ **Start the application:**

   ```bash
   npm run dev
   ```

4. 🌐 **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.


## 👥 Team

- **Ashwani Yadav** - Full Stack Developer

## 🤝 Contributing

Welcome contributors! Please follow these steps:

1. 🍴 Fork the repository
2. 🌱 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 🚀 Push to the branch (`git push origin feature/AmazingFeature`)
5. 📝 Open a Pull Request

<div align="center">
	Made with ❤️ DockTalk.ai 
</div>