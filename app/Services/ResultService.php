<?php

namespace App\Services;

use App\Constants\AppConstants;
use PhpParser\Node\Stmt\Break_;

class ResultService{

    public function getSubjectDictionary(string $class):array
    {
        switch ($class){
            case 'kg_2':
            case 'nursery_1': 
            case 'nursery_2':
            case 'nursery_3':
                return AppConstants::NURSERY_KG_NAMES;
                break;
            case 'primary_1':
            case 'primary_2':
            case 'primary_3':
            case 'primary_4': 
            case 'primary_5':
                return AppConstants::PRIMARY_SUBJECTS_NAMES;
                break;
            case 'jss1':
            case 'jss2':
            case 'jss3':
                return AppConstants::JUNIOR_SUBJECTS_NAMES;
                break;
            case 'ss1':
            case 'ss2':
            case 'ss3':
                return AppConstants::SENIOR_SUBJECTS_NAMES;
                break;
            default:
                return [];

        }
    }

}

