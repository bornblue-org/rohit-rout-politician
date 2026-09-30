#!/usr/bin/env bash
# Dumps the Postgres DB to backups/ with a timestamped filename.
# Usage: ./scripts/backup-db.sh   (run from the project root on the VPS)
set -euo pipefail
cd "$(dirname "$0")/.."
set -a; source .env; set +a

mkdir -p backups
FILE="backups/${DB_NAME:-rohit}_$(date +%Y%m%d_%H%M%S).sql.gz"
docker compose exec -T postgres pg_dump -U "${DB_USER:-rohit}" "${DB_NAME:-rohit}" | gzip > "$FILE"
echo "Backup written to $FILE"

# keep only the last 14 backups
ls -1t backups/*.sql.gz | tail -n +15 | xargs -r rm --
