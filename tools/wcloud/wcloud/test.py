from weblab.admin.script.creation import weblab_create

folder = u"/home/lrg/.weblab.sixx"

options = {'db_engine': 'mysql', 'admin_user': u'admin', 'federated_logic': True, 'coord_engine': 'redis',
           'system_identifier': u'sixx', 'coord_redis_port': 6380L, 'start_ports': 14001, 'admin_name': u'six@six.com',
           'logo_path': '/tmp/tmpLBqaeG', 'federated_visir': True, 'db_passwd': 'weblab', 'db_user': 'weblab',
           'base_url': u'w/sixx', 'admin_mail': u'six@six.com', 'server_host': 'weblab.deusto.es',
           'federated_submarine': True, 'db_name': 'wcloud2', 'admin_password': u'password', 'cores': 3,
           'coord_redis_db': 2L, 'entity_link': u'http://sixx.com'}

weblab_create(u"/home/lrg/.weblab/sixx", options)