# Contributing to KOLF Marketing Website

First off, thank you for considering contributing to the KOLF marketing website! It's people like you that make this project better.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, browser, Node.js version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Provide specific examples to demonstrate the enhancement**
- **Describe the current behavior and expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes** following our coding standards
4. **Add tests** if applicable
5. **Ensure the test suite passes**: `npm run lint && npm run build`
6. **Commit your changes** using a descriptive commit message
7. **Push to your fork** and submit a pull request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/www-kolf-app.git
cd www-kolf-app/kolf-marketing

# Install dependencies
npm install

# Start development server
npm run dev
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Ensure no TypeScript errors with `npm run type-check`
- Use explicit types rather than `any`
- Prefer interfaces over type aliases for object shapes

### React/Next.js

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types with TypeScript
- Follow Next.js best practices for routing and data fetching

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Keep custom CSS to a minimum
- Use CSS variables for theme values

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in multi-line objects/arrays
- Use meaningful variable and function names
- Add comments for complex logic

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Example:
```
Add Thai language support for hero section

- Translate all hero section strings
- Add Thai font support in Tailwind config
- Update language switcher component

Fixes #123
```

## Translation Guidelines

When adding or updating translations:

1. **Maintain consistency** across all language files
2. **Use native speakers** for translations when possible
3. **Keep the same JSON structure** in all locale files
4. **Test all languages** after making changes
5. **Consider text length** differences between languages

### Adding a New Language

1. Create a new locale file in `public/locales/[locale]/common.json`
2. Add the locale to `next.config.js` i18n configuration
3. Update the language switcher component
4. Add appropriate fonts if needed
5. Test thoroughly with native speakers

## Testing

Before submitting a pull request:

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build the project
npm run build

# Test the production build
npm run start
```

## Documentation

- Update the README.md if you change functionality
- Update CLAUDE.md if you change development workflows
- Comment your code where necessary
- Update TypeScript types/interfaces

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## Recognition

Contributors who submit accepted pull requests will be added to the project's contributors list.

Thank you for contributing! 🎉