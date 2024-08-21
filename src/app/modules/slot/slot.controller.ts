import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { slotService } from './slot.services';

const createSlot = catchAsync(async (req, res) => {
  const result = await slotService.createSlot(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slot created successfully',
    data: result,
  });
});

const getAvailableSlots = catchAsync(async (req, res) => {
  const queryParams = req.query;

  const result = await slotService.getAvailableSlots(queryParams);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Available slots retrieved successfully',
    data: result,
  });
});

export const slotController = { createSlot, getAvailableSlots };
