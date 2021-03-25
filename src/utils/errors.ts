import _get from 'lodash/get';

type GetApiErrorReturnType = {
	status: number,
	message: string,
}
type ApiError = {
	status?: number,
	message?: string,
	response?: {
		status: number,
		data: {
			errors: { message: string }[],
		},
	},
};
export const getApiError = (e: ApiError): GetApiErrorReturnType => {
	return {
		status: _get(e, 'response.status', e.status),
		message: _get(e, 'response.data.errors[0].message', e.message),
	};
};
