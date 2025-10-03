import { json } from '@sveltejs/kit';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import type { RequestHandler } from './$types';

const CONTRACT_DATA_PATH = join(process.cwd(), 'src/routes/admin/cap-sow/contract-data.json');

export const GET: RequestHandler = async () => {
	try {
		const data = await readFile(CONTRACT_DATA_PATH, 'utf-8');
		return json(JSON.parse(data));
	} catch (error) {
		console.error('Error reading contract data:', error);
		return json(
			{
				agreementDayMonth: '',
				agreementYear: '',
				subContractorDetails: '',
				liabilityCap1: '125%',
				liabilityCap2: '£500,000',
				insuranceAmount: '£2,000,000',
				terminationNoticePeriod: "30 days'",
				subContractorName: '',
				sowNumber: '',
				sowDate: '',
				sowSubContractorName: '',
				frameworkAgreementDate: '',
				subContractWorkDescription: '',
				deliverables: '',
				keyPersonnel: '',
				startDate: '',
				endDate: '',
				pricesPayment: '',
				performanceMetrics: '',
				customerName: 'HSBC',
				mainContractReference: '',
				specialTerms: '',
				additionalAppendices: '',
				processingSubject: '',
				processingDuration: '',
				processingNature: '',
				personalDataTypes: '',
				dataSubjectCategories: '',
				processingOperations: '',
				rebateFormula: '',
				rebateFrequency: '',
				rebateDays1: '',
				rebatePeriod: '',
				rebateDays2: '',
				rebateInterestRate: '4% per annum above the Bank of England base rate'
			},
			{ status: 200 }
		);
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();
		await writeFile(CONTRACT_DATA_PATH, JSON.stringify(data, null, '\t'), 'utf-8');
		return json({ success: true });
	} catch (error) {
		console.error('Error writing contract data:', error);
		return json({ success: false, error: 'Failed to save data' }, { status: 500 });
	}
};
