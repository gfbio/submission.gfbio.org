# SOP Install Broker Agent

## Procedure

        gpg -o .env encrypted.env.gpg

        cd compose/nginx/

1. Execute migration scripts
	     

		echo "$DB_BACKUP_PASSPHRASE" > /root/db_backup_passphrase.txt
		chmod 400 /root/db_backup_passphrase.txt
		echo "$BROKER_MPI_OWNCLOUD_CONF" > /root/mpi-owncloud.conf
		chmod 400 /root/mpi-owncloud.conf
		cp genomicsdataservices/system/backup_broker_db.sh /etc/cron.daily/backup_broker_db # install cronjob for DB backup; NB: scripts in the cron.hourly|daily|weekly|monthly folders MUST NOT have extensions
		
##Comments
`"$DB_BACKUP_PASSPHRASE"` and `"$BROKER_MPI_OWNCLOUD_CONF"` are documented separately on paper and in Ivo's KeePassX.