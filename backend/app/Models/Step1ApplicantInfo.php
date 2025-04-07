<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Step1ApplicantInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_bn', 'name_en', 'father_name', 'mother_name', 'gender',
        'designation', 'mobile', 'phone', 'email', 'org_name_bn', 'org_name_en',
        'tour_operator_type', 'org_type', 'website', 'location', 'division',
        'district', 'upazila', 'post_code', 'address_bn', 'address_en',
        'business_phone', 'business_mobile', 'business_email', 'owner_name',
        'owner_father_name', 'owner_mother_name', 'nationality', 'nid', 'dob',
        'owner_designation', 'owner_email', 'owner_mobile', 'permanent_division',
        'permanent_district', 'permanent_upazila', 'permanent_post_code',
        'permanent_address', 'current_division', 'current_district',
        'current_upazila', 'current_post_code', 'current_address',
        'inbound_count', 'outbound_count', 'domestic_count', 'certificate_number',
        'issue_date', 'fiscal_year', 'tax_issue_date', 'tax_fiscal_year', 'e_tin', 'status'
    ];

    public function application()
    {
        return $this->belongsTo(TourOperatorApplication::class, 'application_id');
    }
}


