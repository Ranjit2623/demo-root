# Demo Root - ERP Platform Architecture

Central orchestration hub for the ERP multi-service architecture.

## Repositories
1. **[demo-master](https://github.com/Ranjit2623/demo-master)** (Port 3000, `october_node_db`)
   - Users, Authentication, Orders, Email Queue
2. **[demo-production](https://github.com/Ranjit2623/demo-production)** (Port 3001, `production_db`)
   - Production batches, work orders, manufacturing status
3. **[demo-inventory](https://github.com/Ranjit2623/demo-inventory)** (Port 3002, `inventory_db`)
   - SKU management, stock tracking, warehouse inventory

## CI/CD
GitHub Actions workflow configured in `.github/workflows/ci.yml` triggers on pushes and PRs to branches:
- `ranjit`
- `master`
- `dev`

## Local Development (Docker Compose)
```bash
# Start MySQL & Redis infrastructure
docker compose up -d

# Check health across all microservices
npm test
```
