# SOP Backup Broker Agent Database
## Procedure  

        LOCAL_BACKUP_DIR="/var/www/gds_docker/backups"
        REMOTE_BACKUP_URL="https://owncloud.mpi-bremen.de/remote.php/webdav/broker_db_backup/" #NB: trailing slash is MANDATORY!!!
        CURL_CONF="/root/mpi-owncloud.conf"
        PASSPHRASE_FILE="/root/db_backup_passphrase.txt"  
   


	    LATEST_BACKUP=$(find "${LOCAL_BACKUP_DIR}" -type f -printf '%T+\t%p\n' | sort -r | head -n 1 | cut -f 2)
		LATEST_BACKUP_MD5="${LATEST_BACKUP}.md5"
		md5sum "$LATEST_BACKUP" > "$LATEST_BACKUP_MD5"
		LATEST_BACKUP_ENCRYPTED="${LATEST_BACKUP}.enc"
		openssl enc -e -aes-256-cbc -kfile "$PASSPHRASE_FILE" -in "$LATEST_BACKUP" -out "$LATEST_BACKUP_ENCRYPTED"

1. Create tar archive of backup file and md5 checksum

        LATEST_BACKUP_TAR="${LATEST_BACKUP%.sql.gz}.tar"
        tar -cf "$LATEST_BACKUP_TAR" "$LATEST_BACKUP_ENCRYPTED" "$LATEST_BACKUP_MD5"

1. Transfer backup tar archive to remote server

        curl --digest -K "$CURL_CONF" -T "$LATEST_BACKUP_TAR" "$REMOTE_BACKUP_URL"

1. Clean up

        rm "$LATEST_BACKUP_ENCRYPTED" "$LATEST_BACKUP_TAR" "$LATEST_BACKUP_MD5"
        
        
## Comments
This SOP is implemented as a bash script `genomicsdataservices/system/backup_broker_db.sh` and installed as a daily cron in `/etc/cron.daily/`.