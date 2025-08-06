<?php
namespace App\Constants;
    class AppConstants{
        const AVAILABLE_CLASSES=array('kg_2','nursery_1','nursery_2','nursery_3','primary_1','primary_2','primary_3','primary_4','primary_5','jss1','jss2','jss3','ss1','ss2','ss3');
        const STAFF_TOKENS="staff_tokens";
        const FORM_MASTER_TABLE="formasters";
        const AVAILABLE_HOUSE=array('Ruby','Armetyst','Sapphire','Emerald','Crystolite');
        const TS='staff_class_subjects';
        const SCH_CONFIG="school_configurations";
        const DYNAMIC_TABLES="dynamic_tables";
        const REG_STU="admitted_students";


        const AVAILABLE_SESSION = ["2024_2025"];
        
        const FORMS=array("Science","Commercial","Art",NULL);

        const SENIOR_CLASS=array("ss1","ss2","ss3");
        const JUNIOR_CLASS=array("jss1","jss2","jss3");
        const NURSERY_CLASS = array('kg_2','nursery_1','nursery_2','nursery_3');
        const PRIMARY_CLASS = array('primary_1','primary_2','primary_3','primary_4','primary_5');
        
        const NURSERY_KG_NAMES=array(
            "bible_knowledge"=>"Bible Knowledge", 
            "creative_arts"=>"Creative Arts", 
            "language_skills"=>"Language Skills", 
            "letters_and_phonics"=>"Letters and Phonics", 
            "maths_skills"=>"Maths Skills",
            "phe"=>"P.H.E", 
            "rhymes"=>"Rhymes", 
            "science"=>"Science", 
            "social_norms"=>"Social Norms", 
            "writing"=>"Writing"
        );
        const PRIMARY_SUBJECTS=array("agric_science","crs","civic_education","computer_science","creative_arts", "english_language","french","handwriting","home_economics", "mathematics", "phe","primary_science","q_reasoning", "social_studies","v_reasoning");

        const NURSERY_KG=array("bible_knowledge","creative_arts", "language_skills", "letters_and_phonics", "maths_skills","phe", "rhymes","science", "social_norms", "writing");

        const PRIMARY_NURSERY_SUBJECTS=array( "agric_science","crs","civic_education","computer_science","creative_arts", "english_language","french","handwriting","home_economics", "mathematics","phe","primary_science","q_reasoning", "social_studies","v_reasoning", "bible_knowledge", "language_skills", "letters_and_phonics", "maths_skills", "rhymes","science", "social_norms","writing");

        const ALLSUBJECTS=array(
            'agric_science','basic_sci_tech','biology', 'bible_knowledge','business_studies','chemistry','civic_education','commerce',
            'computer_science','creative_arts','crs','data_processing','economics','english_language','french','financial_accounting',
            'further_mathematics','geography','government','handwriting','history','home_economics','language_skills','letters_and_phonics',
            'lit_in_eng','marketing','mathematics','maths_skills','national_values','photography','physics','phe','pre_vocational_studies','primary_science','social_studies','q_reasoning','rhymes','science','social_norms','technical_drawing','writing','v_reasoning');
        const PRIMARY_SUBJECTS_NAMES=array(
            "agric_science"=>"AGRIC SCIENCE",
            "crs"=> "C.R.S",
            "civic_education"=> "CIVIC EDUCATION",
            "computer_science"=>"COMPUTER SCIENCE",
            "creative_arts"=>"CREATIVE ARTS", 
            "english_language"=>"ENGLISH LANGUAGE", 
            "french"=>"FRENCH", 
            "handwriting"=>"HAND WRITING", 
            "home_economics"=>"HOME ECONOMICS", 
            "mathematics"=>"MATHEMATICS", 
            "phe"=>"P.H.E", 
            "primary_science"=>"PRIMARY SCIENCE", 
            "q_reasoning"=>"Q. REASONING", 
            "social_studies"=>"SOCIAL STUDIES", 
            "v_reasoning"=>"V. REASONING"
        );
          //"bible_knowledge","rhymes","language_skills","letters_and_phonics", "social_norms", "writing", "maths_skills","science"

        const JUNIOR_SUBJECTS=array('english_language','mathematics','business_studies','crs','creative_arts','french','history','national_values','pre_vocational_studies','lit_in_eng','basic_sci_tech');
        const JUNIOR_SUBJECTS_NAMES=array( 
            'business_studies'=>'BUSINESS STUDIES',
            'crs'=>'CRS',
            'creative_arts'=>'CREATIVE ARTS',
            'english_language'=>'ENGLISH LANGUAGE',
            'french'=>'FRENCH',
            'history'=>'HISTORY',
            'mathematics'=>'MATHEMATICS',
            'lit_in_eng'=>'LITERATURE IN ENGLISH',
            'national_values'=>'NATIONAL VALUES',
            'pre_vocational_studies'=>'PRE-VOCATIONAL STUDIES',
            'basic_sci_tech'=>'BASIC SCIENCE & TECHNOLOGY'
        );
            
        const SENIOR_SUBJECTS=array('english_language','mathematics','data_processing','computer_science','agric_science','crs','civic_education','economics','government','lit_in_eng','marketing','photography','biology', 'chemistry','further_mathematics','physics', 'commerce','geography','financial_accounting','technical_drawing');
        const SENIOR_SUBJECTS_NAMES=array(
            'data_processing'=>'DATA PROCESSING',
            'computer_science'=>'COMPUTER SCIENCE',
            'agric_science'=>'AGRIC SCIENCE',
            'crs'=>"CRS",
            'civic_education'=>'CIVIC EDUCATION',
            'commerce'=>"COMMERCE",
            'economics'=>'ECONOMICS',
            'english_language'=>'ENGLISH LANGUAGE',
            'financial_accounting'=>"FINANCIAL ACCOUNTING",
            'geography'=>'GEOGRAPHY',
            'government'=>'GOVERNMENT',
            'lit_in_eng'=>'LITERATURE IN ENGLISH',
            'marketing'=>'MARKETING',
            'mathematics'=>'MATHEMATICS',
            'photography'=>'PHOTOGRAPHY',
            'biology'=>'BIOLOGY', 
            'chemistry'=>'CHEMISTRY',
            'further_mathematics'=>'FURTHER MATHEMATICS',
            'physics'=>'PHYSICS',
            'technical_drawing'=>'TECHNICAL DRAWING'
        );
        
        const BEHAVIOUR_ITEM= array('attentiveness_in_class','handling_of_tools','handwriting','helping_others','honesty','managing_school_properties','neatness','obedience','sense_of_responsibility','punctuality','r_with_students','initiative','organizational_ability');

        const BEHAVIOUR_DICT=array(
           'attentiveness_in_class'=>'Attentiveness in class',
           'handling_of_tools'=>'Handling of Tools',
           'handwriting'=>'Handwriting',
           'helping_others'=>'Helping others',
           'honesty'=>'Honesty',
           'managing_school_properties'=>'Managing school properties',
           'neatness'=>'Neatness',
           'obedience'=>'Obedience',
           'sense_of_responsibility'=>'Sense of Responsibility',
           'punctuality'=>'Punctuality',
           'r_with_students'=>'Relationship',
           'initiative'=>'Initiative',
           'organizational_ability'=>'Organizational ability'
        );
    }


?>