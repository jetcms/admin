<?php namespace JetCMS\Website;

use Illuminate\Support\ServiceProvider;

class WebsiteServiceProvider extends ServiceProvider {
	/**
	 * Bootstrap the application services.
	 *
	 * @return void
	 */
	public function boot()
	{
			$this->loadViewsFrom(__DIR__.'/../views', 'jetweb');
          	$this->loadTranslationsFrom(__DIR__ . '/../lang', 'jetweb');
	/*
            $this->publishes([
                __DIR__.'/../migrations' => base_path('database/migrations')
            ]);
	*/		
		
		include __DIR__.'/../routes.php';
		include __DIR__.'/../viewComposers.php';
	}
        // ---
	/**
	 * Register the application services. 
	 *
	 * @return void
	 */
	public function register()
	{
		//
	}
        
}