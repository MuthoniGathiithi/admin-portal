# Deployment Guide for Admin Portal

## Render Deployment

This project is configured for deployment on Render using the `render.yaml` file.

### Prerequisites
- A Render account
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

1. **Connect Repository**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" and select "Blueprint"
   - Connect your Git repository
   - Render will automatically detect the `render.yaml` file

2. **Configuration**
   - The service will be named `admin-portal`
   - Build command: `npm ci && npm run build`
   - Start command: `npm start`
   - Environment: Node.js
   - Plan: Free tier

3. **Environment Variables**
   - NODE_ENV is automatically set to `production`
   - Add any additional environment variables in the Render dashboard if needed

### Build Configuration

The project uses:
- Next.js standalone output for optimized builds
- Automatic static optimization
- Production-ready configuration

### Post-Deployment

After successful deployment:
- Your app will be available at `https://admin-portal-[random-string].onrender.com`
- Render provides automatic HTTPS
- The service will sleep after 15 minutes of inactivity on the free plan

### Troubleshooting

If deployment fails:
1. Check the build logs in Render dashboard
2. Ensure all dependencies are listed in `package.json`
3. Verify the build command completes successfully locally
4. Check for any missing environment variables

### Local Testing

To test the production build locally:
```bash
npm run build
npm start
```
