import asyncHandler from 'express-async-handler';
import prisma from '../lib/prisma.js';
import bcrypt from 'bcryptjs';

export const getHomePage = asyncHandler(async (req, res) => {
    res.render('homepage', {title:'Gym Tracker - Pieces'});
});