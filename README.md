# Personal Portfolio Website

A modern, responsive React.js portfolio website showcasing personal information, education, and career experience.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Navigation**: Easy navigation between Homepage and Education & Career pages
- **Customizable**: Easy to personalize with your own information

## Pages

1. **Homepage**: Personal introduction, skills, and contact information
2. **Education & Career**: Academic background, work experience, and certifications

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone or download this project to your local machine
2. Open a terminal/command prompt in the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser
3. The application will automatically reload when you make changes

### Building for Production

To create a production build:
```bash
npm run build
```

## Customization

### Personal Information

Edit the following files to add your personal information:

#### Homepage (`src/components/Homepage.js`)
- Replace `[Your Name]` with your actual name
- Update the hero section description
- Add your personal introduction in the "Who I Am" section
- List your skills in the "My Skills" section
- Describe your current role in the "What I Do" section
- Update contact information in the "Get In Touch" section

#### Education & Career (`src/components/EducationCareer.js`)
- Add your educational background with dates, institutions, and details
- Include your work experience with job titles, companies, and responsibilities
- List your certifications and training programs

### Styling

The website uses CSS for styling. You can customize the appearance by editing:
- `src/index.css` - Main styles and layout
- `src/App.css` - App-specific styles

### Colors and Theme

The current color scheme uses:
- Primary: Purple gradient (#667eea to #764ba2)
- Background: Light gray (#f8f9fa)
- Text: Dark gray (#333)
- Cards: White with subtle shadows

You can modify these colors in the CSS files to match your personal brand.

## Project Structure

```
src/
├── components/
│   ├── Homepage.js          # Homepage component
│   └── EducationCareer.js   # Education & Career component
├── App.js                   # Main app component with routing
├── App.css                  # App-specific styles
├── index.js                 # Application entry point
└── index.css                # Global styles
```

## Technologies Used

- **React.js** - Frontend framework
- **React Router** - Navigation and routing
- **CSS3** - Styling and responsive design

## Deployment

You can deploy this portfolio to various platforms:

### GitHub Pages
1. Create a GitHub repository
2. Push your code to the repository
3. Enable GitHub Pages in repository settings
4. Set the source to the `gh-pages` branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a React app
3. Deploy with default settings

## Contributing

This is a personal portfolio template. Feel free to use it as a starting point for your own portfolio website.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions about customizing the portfolio, feel free to reach out! 