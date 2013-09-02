devForeman = foreman start -e .env

dev: 
	$(devForeman)

db:
	./update_db.sh
	$(devForeman)
