
type HttpRequest<T> = {
    body: T
}
type ListUser = {
    allUsers: Array<any>
}

type ListResponse<T> = {
    statusCode: number 
    responseBody: T
}
class CheckParams{
    private async methodOne(httpRequest: HttpRequest<Number[]>): Promise<ListResponse<ListUser>>{
        return await {
                statusCode: 200,
                responseBody: {
                    allUsers: []
                }
            }
        }
    }