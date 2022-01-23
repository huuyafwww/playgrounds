# -*- coding: utf-8 -*-
import falcon, os, docker
from middlewares import JSONTranslator, Handler
from handler import PythonScriptExecuteHandler
from services import DockerContainerManageService , ExecuteScriptManageService

middlewares = [
    JSONTranslator(),
    Handler()
]

app = falcon.API(
    independent_middleware=True,
    middleware=middlewares)

app.req_options.strip_url_path_trailing_slash = True

dockerContainerManageService = DockerContainerManageService(docker.from_env())
pythonExecuteScriptManageService = ExecuteScriptManageService(
    "{}/run.py".format(os.getenv('PYTHON_VOLUME_PATH'))
    , "{}/{}".format(os.getenv('PYTHON_VOLUME_PATH'), os.getenv('PYTHON_LOG_FILE') )
)

app.add_route('/script/python',
    PythonScriptExecuteHandler(
        dockerContainerManageService
        , pythonExecuteScriptManageService
    )
)
