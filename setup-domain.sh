#!/bin/bash

echo "🔧 Setting up custom domain for Uluwatu Surf School"
echo "================================================="
echo ""

echo "Step 1: Add CNAME record to your DNS provider:"
echo "Type: CNAME"
echo "Name: staging"
echo "Value: cname.vercel-dns.com"
echo "TTL: 300"
echo ""

echo "Step 2: After DNS is configured, run these commands:"
echo ""
echo "# Try adding domain to project"
echo "vercel domains add staging.uluwatusurfschool.com"
echo ""
echo "# If that fails, try alias method"
echo "vercel alias set \$(vercel ls --limit 1 | grep https | head -1 | awk '{print \$1}' | sed 's|https://||') staging.uluwatusurfschool.com"
echo ""

echo "Current deployment URL:"
vercel ls --limit 1 | grep "uluwatu-surf-school" | head -1

echo ""
echo "📋 Manual Verification Steps:"
echo "1. Configure the CNAME record above in your DNS"
echo "2. Wait 5-10 minutes for DNS propagation"
echo "3. Run: vercel domains add staging.uluwatusurfschool.com"
echo "4. Or use the Vercel dashboard: https://vercel.com/dashboard"
echo ""