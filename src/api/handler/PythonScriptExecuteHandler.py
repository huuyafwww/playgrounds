import falcon

class PythonScriptExecuteHandler:

    def __init__(self, dockerContainerManageService, executeScriptManageService):
        self.dockerContainerManageService = dockerContainerManageService
        self.executeScriptManageService = executeScriptManageService

    def on_post(self, req, resp):
        requestBody = req.context['doc']

        self.executeScriptManageService.write(requestBody.get("code"))

        container = self.dockerContainerManageService.getContainer("playground_python_container")
        self.dockerContainerManageService.startContainer(container)
        finishStatus = self.dockerContainerManageService.waitFinish(container)

        resp.media = {
            "result": self.executeScriptManageService.getLog(),
            "status": finishStatus
        }
        resp.status = falcon.HTTP_200

